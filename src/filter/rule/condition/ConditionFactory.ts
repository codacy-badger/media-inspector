import crypto from 'crypto';

import { ConditionOperator } from './ConditionOperator';

import { ConditionBetween } from './ConditionBetween';
import { ConditionEqual } from './ConditionEqual';
import { ConditionGreaterThanOrEqual } from './ConditionGreaterThanOrEqual';
import { ConditionIn } from './ConditionIn';
import { ConditionLessThan } from './ConditionLessThan';
import { ConditionNotEqual } from './ConditionNotEqual';

export interface ConditionData {
	path: string;
	operator: ConditionOperator;
	value;
}

export class ConditionFactory {
	static _conditions = new Map();

	static createCondition(inputCondition: ConditionData) {
		const condition = Object.assign({}, inputCondition);

		// Create and return
		switch (condition.operator) {
			case ConditionOperator.BETWEEN:
				return new ConditionBetween(condition.path, condition.value);

			case ConditionOperator.IN:
				return new ConditionIn(condition.path, condition.value);

			case ConditionOperator.EQUAL:
				return new ConditionEqual(condition.path, condition.value);

			case ConditionOperator.NOT_EQUAL:
				return new ConditionNotEqual(condition.path, condition.value);

			case ConditionOperator.LESS_THAN:
				return new ConditionLessThan(condition.path, condition.value);

			case ConditionOperator.GREATER_THAN_OR_EQUAL:
				return new ConditionGreaterThanOrEqual(condition.path, condition.value);

			default:
				throw new Error(`Unknown operator '${condition.operator}' in ${JSON.stringify(inputCondition)}`);
		}
	}

	static getCondition(conditionData: ConditionData) {
		// Calculate hash of input
		const hash = crypto.createHash('md5').update(JSON.stringify(conditionData)).digest('hex');

		// Check if already available
		if (ConditionFactory._conditions.has(hash)) {
			return ConditionFactory._conditions.get(hash);
		}

		// Otherwise create and store for future reuse
		const condition = ConditionFactory.createCondition(conditionData);
		ConditionFactory._conditions.set(hash, condition);

		return condition;
	}
}
