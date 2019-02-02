import crypto from 'crypto';

import { FilterConditionBetween } from './FilterConditionBetween';
import { FilterConditionEq } from './FilterConditionEq';
import { FilterConditionGe } from './FilterConditionGe';
import { FilterConditionIn } from './FilterConditionIn';
import { FilterConditionLt } from './FilterConditionLt';
import { FilterConditionNe } from './FilterConditionNe';

export class FilterConditionFactory {
	static _filterConditions: any = new Map();

	static createFilterCondition(inputCondition) {
		// Warn and fix input
		if (inputCondition.comparator) {
			console.log(`[FilterConditionFactory] The 'comparator' option is deprecated. Use 'operator' instead.`);
		}
		const condition = Object.assign({}, inputCondition, {
			operator: inputCondition.operator || inputCondition.comparator
		});

		// Create and return
		switch (condition.operator) {
			case 'between':
				return new FilterConditionBetween(condition);

			case 'in':
				return new FilterConditionIn(condition);

			case '=':
				return new FilterConditionEq(condition);

			case '!=':
				return new FilterConditionNe(condition);

			case '<':
				return new FilterConditionLt(condition);

			case '>=':
				return new FilterConditionGe(condition);

			default:
				throw new Error(`Unknown operator '${condition.operator}' in ${JSON.stringify(inputCondition)}`);
		}
	}

	static getFilterCondition(condition) {
		// Calculate hash of input
		const hash = crypto.createHash('md5').update(JSON.stringify(condition)).digest('hex');

		// Check if already available
		if (FilterConditionFactory._filterConditions.has(hash)) {
			return FilterConditionFactory._filterConditions.get(hash);
		}

		// Otherwise create and store for future reuse
		const filterCondition = FilterConditionFactory.createFilterCondition(condition);
		FilterConditionFactory._filterConditions.set(hash, filterCondition);

		return filterCondition;
	}
}
