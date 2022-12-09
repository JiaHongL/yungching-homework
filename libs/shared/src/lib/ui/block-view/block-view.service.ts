import {
  Injectable,
  Inject,
  ApplicationRef,
  Injector,
  ComponentFactoryResolver,
} from '@angular/core';
import { ComponentPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';

import { BlockViewComponent } from './block-view.component';


@Injectable({
  providedIn: 'root',
})
export class BlockViewService {

  private portalHost: DomPortalOutlet = new DomPortalOutlet(
    this.document.body,
    this._componentFactoryResolver,
    this._appRef,
    this._injector
  );

  private insertPortal: ComponentPortal<BlockViewComponent> =
    new ComponentPortal(BlockViewComponent);

  constructor(
    @Inject(DOCUMENT) private document: any,
    private _appRef: ApplicationRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _injector: Injector
  ) {}

  show() {
    if (!this.portalHost.hasAttached()) {
      this.portalHost.attach(this.insertPortal);
    }
  }

  hide() {
    this.portalHost.detach();
  }

}
