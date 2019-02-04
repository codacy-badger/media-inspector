import { FilterConditionResult } from './FilterConditionResult';
import { FilterCondition } from './FilterCondition';

export class FilterConditionEq extends FilterCondition {
	check(inputValue) {
		// Convert the input
		const value = FilterConditionEq.convertValue(inputValue);

		// Check condition
		if (value === this.expectedValue) {
			return new FilterConditionResult(this, value, true);
		}

		return new FilterConditionResult(this, value, false);
	}

	toString() {
		return `= ${this.expectedValue}`;
	}
}