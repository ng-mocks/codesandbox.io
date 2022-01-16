// tslint:disable no-duplicate-imports

import {
  Component,
  Directive,
  Injectable,
  NgModule,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MockBuilder, MockRender } from 'ng-mocks';

@Directive()
class BaseClass {
  public name = 'directive';
}

@Injectable()
class MyProvider extends BaseClass {}

@Component({
  providers: [MyProvider],
  selector: 'target',
  template: '{{ service.name }}',
})
class MyComponent {
  public constructor(public readonly service: MyProvider) {}
}

@NgModule({
  declarations: [BaseClass, MyComponent],
  exports: [BaseClass, MyComponent],
})
class ModuleWithComponent {}

describe('double-decorator-ivy:without-selector', () => {
  describe('default', () => {
    beforeEach(() =>
      TestBed.configureTestingModule({
        imports: [ModuleWithComponent],
      }).compileComponents(),
    );

    it('fails', () => {
      expect(() => MockRender(MyComponent)).toThrowError(
        /Directive BaseClass has no selector/,
      );
    });
  });

  describe('hot-fix', () => {
    beforeEach(() =>
      MockBuilder(MyComponent, ModuleWithComponent)
        .exclude(BaseClass)
        .mock(MyProvider),
    );

    it('fixes the issue via exclude', () => {
      const fixture = MockRender(MyComponent);
      expect(fixture.nativeElement.innerHTML).toContain(
        '<target></target>',
      );
    });
  });

  describe('the-issue', () => {
    beforeEach(() =>
      MockBuilder(MyComponent, ModuleWithComponent).mock(MyProvider),
    );

    it('fails', () => {
      expect(() => MockRender(MyComponent)).toThrowError(
        /Directive MockOfBaseClass has no selector/,
      );
    });
  });

  describe('keep', () => {
    beforeEach(() =>
      MockBuilder(MyComponent, ModuleWithComponent).keep(MyProvider),
    );

    it('fails', () => {
      expect(() => MockRender(MyComponent)).toThrowError(
        /Directive MockOfBaseClass has no selector/,
      );
    });
  });
});
