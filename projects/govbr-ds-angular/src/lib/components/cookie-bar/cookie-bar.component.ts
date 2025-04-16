import { AfterViewInit, Component, ElementRef, inject, input, output } from '@angular/core';
import BRCookiebar from '@govbr-ds/core/dist/components/cookiebar/cookiebar';
import cookies from './content/cookies.json';
import { CookieModel } from './model/cookie.model';

@Component({
	selector: 'app-cookie-bar',
	standalone: true,
	imports: [],
	templateUrl: './cookie-bar.component.html',
	styleUrl: './cookie-bar.component.scss',
})
export class CookieBarComponent implements AfterViewInit {
	private instance: unknown;
	private brCookieBar = inject(ElementRef);
	cookiesJson = input<object>(cookies);
	submit = output<CookieModel>();

	ngAfterViewInit(): void {
		const component = this.brCookieBar.nativeElement.querySelector('.br-cookiebar');
		const params = {
			name: 'br-cookiebar',
			component: component,
			json: this.cookiesJson(),
			lang: 'pt-br',
			mode: 'default',
			callback: (response: CookieModel) => this.submit.emit(response),
		};
		this.instance = new BRCookiebar(params);
	}
}
