import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  CheckboxComponent,
  InputComponent,
  MagicButtonComponent,
  RadioComponent,
  SelectComponent,
  TextareaComponent,
  TabsComponent,
  AlertComponent,
  DateTimePickerComponent,
  SwitchComponent,
  MultiSelectComponent,
  PaginatorComponent,
  LoadingComponent,
  CollapseItemComponent,
  LoadingService,
  AlertService,
  ButtonDirective,
} from '@govbr-ds-angular';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    SelectComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    MagicButtonComponent,
    TextareaComponent,
    TabsComponent,
    AlertComponent,
    DateTimePickerComponent,
    SwitchComponent,
    MultiSelectComponent,
    PaginatorComponent,
    LoadingComponent,
    CollapseItemComponent,
    ButtonDirective
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'govbr-ds-angular-example';
  selectedOption: number | null = null;
  inputValue: string = '';
  isChecked: boolean = false;
  selectedRadio: string = '';
  textAreaValue: string = '';
  activeTab: number = 1;
  selectedDate: string | null = null;
  
  // Propriedades para os novos componentes
  switchValue: boolean = false;
  multiSelectValues: number[] = [];
  currentPage: number = 1;
  totalItems: number = 100;
  pageSize: number = 10;
  isCollapseExpanded: boolean = false;

  private readonly _loadingService = inject(LoadingService);
	private readonly _alertService = inject(AlertService);

	// Método para controlar o loading
	toggleLoading() {
    this._loadingService.setLoading(true);

    setTimeout(() => {
      this._loadingService.setLoading(false);
    }, 3000);
  }

  showAlert() {
		this._alertService.showAlert('warning', 'Este é um alerta de exemplo', 'Alerta');
	}
  
  // Método para lidar com mudanças de página
  onPageChange(event: any) {
		this.currentPage = event.pageIndex;
	}
}
