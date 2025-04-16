import { AfterViewInit, Component, ElementRef, inject, input, signal } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IMenu } from './types/menu.type';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import BRMenu from '@govbr-ds/core/dist/components/menu/menu';

/**
 * Componente MenuComponent é responsável por exibir o menu da aplicação.
 * @example
 * <app-menu></app-menu>
 * @public
 * {@link https://www.gov.br/ds/components/menu?tab=desenvolvedor|Documentação oficial}
 */
@Component({
	selector: 'app-menu',
	standalone: true,
	host: { class: 'br-menu push px-0' },
	imports: [NgClass, NgTemplateOutlet, RouterLink, RouterLinkActive],
	templateUrl: './menu.component.html',
	styleUrl: './menu.component.scss',
})
export class MenuComponent implements AfterViewInit {
	list = input<IMenu[]>([]);
	instance: unknown;
	isMobile = signal<boolean>(false);

	private _brMenu = inject(ElementRef);
	private _breakpointObserver = inject(BreakpointObserver);

	constructor() {
		this._breakpointObserver
			.observe([Breakpoints.Handset, Breakpoints.Web, Breakpoints.Tablet])
			.pipe(takeUntilDestroyed())
			.subscribe(() => {
				this.isMobile.set(this._breakpointObserver.isMatched(Breakpoints.Handset));
			});
	}

	ngAfterViewInit(): void {
		setTimeout(() => {
			this.instance = new BRMenu('br-menu', document.querySelector('.br-menu'));
		});
	}

	closeMenu() {
		if (this._brMenu) this._brMenu.nativeElement.querySelector('[data-dismiss="menu"]')?.click();
	}

	closeMenuIfMobile() {
		if (this.isMobile()) {
			this.closeMenu();
		}
	}
}
