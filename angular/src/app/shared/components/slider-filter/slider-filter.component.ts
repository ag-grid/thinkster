import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { AgFrameworkComponent } from 'ag-grid-angular';
import {
  IFloatingFilter,
  IFloatingFilterParams,
  NumberFilter,
  NumberFilterModel,
} from 'ag-grid-community';

export interface SliderFilterParams extends IFloatingFilterParams {
  max: number;
  min: number;
}

@Component({
  templateUrl: './slider-filter.component.html',
  styleUrls: ['./slider-filter.component.scss'],
})
export class SliderFilterComponent
  implements IFloatingFilter, AgFrameworkComponent<SliderFilterParams> {
  /** The slider's maximum value. */
  max: number;

  /** The slider's minimum value. */
  min: number;

  /** The initial value of the slider. */
  value: number;

  /** The slider parameters. */
  private params: SliderFilterParams;

  agInit(params: SliderFilterParams): void {
    this.params = params;
    this.max = params.max;
    this.min = params.min;
  }

  onChange(event: MatSliderChange): void {
    // const value = event.value;
    // this.params.parentFilterInstance((instance: NumberFilter) =>
    //   instance.onFloatingFilterChanged(
    //     'greaterThan',
    //     value === 0 ? null : value
    //   )
    // );
  }

  onInput(event: MatSliderChange): void {
    const value = event.value;
    this.params.parentFilterInstance((instance: NumberFilter) =>
      instance.onFloatingFilterChanged(
        'greaterThan',
        value === 0 ? null : value
      )
    );
  }

  onParentModelChanged(parentModel: NumberFilterModel): void {
    if (parentModel) {
      this.value = parentModel.filter;
    } else {
      this.value = 0;
    }
  }
}
