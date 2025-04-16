import { Pipe, PipeTransform } from '@angular/core';
import { getIconByStateUtils, StateType } from '../../utils';

@Pipe({
	name: 'getIconByState',
	standalone: true,
})
export class GetIconByStatePipe implements PipeTransform {
	transform(state: StateType): string {
		return getIconByStateUtils(state);
	}
}
