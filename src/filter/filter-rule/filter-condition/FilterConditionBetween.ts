import { FilterConditionResult } from './FilterConditionResult';
import { FilterCondition } from './FilterCondition';

export class FilterConditionBetween extends FilterCondition {
	constructor(path: string, value) {
		super(path, value);

		if (!Array.isArray(this.expectedValue)) {
			throw new Error(`The 'between' operator expects an array of 2 values, not '${this.expectedValue}'. Path: ${path} Value: ${value}`);
		}
	}

	check(inputValue) {
		// Convert the input
		const value = FilterConditionBetween.convertValue(inputValue);

		// Check condition
		if (this.expectedValue[0] <= value && value <= this.expectedValue[1]) {
			return new FilterConditionResult(this, value, true);
		}

		return new FilterConditionResult(this, value, false);
	}

	toString() {
		return `${this.expectedValue[0]} <= X <= ${this.expectedValue[1]}`;
	}

	toStringForValue(inputValue) {
		return `${this.expectedValue[0]} <= ${inputValue} <= ${this.expectedValue[1]}`;
	}
}