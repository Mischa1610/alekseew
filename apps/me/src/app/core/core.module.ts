import { NgModule, Optional, SkipSelf, Type } from '@angular/core';
import { FooterModule } from '@footer/footer.module';
import { HeaderModule } from '@header/header.module';
import { NavigationModule } from '@navigation/navigation.module';
import { SidebarModule } from '@sidebar/sidebar.module';

/**
 * All core components should be feature modules and the once that should be imported & exported should be added here
 */
const ME_CORE_MODULES: Type<NgModule>[] = [
  HeaderModule,
  NavigationModule,
  SidebarModule,
  FooterModule,
];

@NgModule({
  imports: [ME_CORE_MODULES],
  exports: [ME_CORE_MODULES],
})
export class CoreModule {
  /**
   * The constructor of the CoreModule is used to check that the CoreModule is only imported once.
   *
   * @param core - DI reference to it-self CoreModule
   */
  constructor(
    @Optional()
    @SkipSelf()
    core: CoreModule,
  ) {
    if (core) {
      throw new Error(
        'The CoreModule should only be imported once (in the AppModule)!',
      );
    }
  }
}
