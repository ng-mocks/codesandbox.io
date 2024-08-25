import './test.spec';

import './examples/MockActivatedRoute/test.spec';
import './examples/MockBuilder/test.deep.spec';
import './examples/MockBuilder/test.ng-mocks.spec';
import './examples/MockBuilder/test.promise.spec';
import './examples/MockBuilder/test.simple.spec';
import './examples/MockComponent/test.spec';
import './examples/MockDirective-Attribute/test.spec';
import './examples/MockDirective-Structural/test.spec';
import './examples/MockForms/test.spec';
import './examples/MockHostDirective/test.spec';
import './examples/MockInitializationLogic/test.spec';
import './examples/MockInstance/component.spec';
import './examples/MockInstance/test.spec';
import './examples/MockModule/test.spec';
import './examples/MockObservable/test.spec';
import './examples/MockPipe/test.spec';
import './examples/MockProvider/test.spec';
import './examples/MockReactiveForms/test.spec';
import './examples/MockRender/test.spec';
import './examples/MockSanitizer/test.spec';
import './examples/MockViewChild/test.spec';
import './examples/TestAttributeDirective/test.spec';
import './examples/TestDirectiveLetOf/dynamic.spec';
import './examples/TestDirectiveLetOf/static.spec';
import './examples/TestHostDirective/test.spec';
import './examples/TestHttpInterceptor/test.spec';
import './examples/TestHttpRequest/test.spec';
import './examples/TestLazyModule/test.spec';
import './examples/TestLifecycleHooks/test.spec';
import './examples/TestLifecycleHooks/test.string.spec';
import './examples/TestLifecycleHooks/test.type-without-params.spec';
import './examples/TestMultiToken/test.spec';
import './examples/TestPipe/test.spec';
import './examples/TestProvider/test.spec';
import './examples/TestProviderInComponent/test.spec';
import './examples/TestProviderInDirective/test.spec';
import './examples/TestProviderWithDependencies/test.spec';
import './examples/TestProviderWithUseClass/test.spec';
import './examples/TestProviderWithUseExisting/test.spec';
import './examples/TestProviderWithUseFactory/test.spec';
import './examples/TestProviderWithUseValue/test.spec';
import './examples/TestRoute/test.spec';
import './examples/TestRoutingGuard/can-activate-child.spec';
import './examples/TestRoutingGuard/can-activate.spec';
import './examples/TestRoutingGuard/can-deactivate.spec';
import './examples/TestRoutingGuard/can-load.spec';
import './examples/TestRoutingGuard/can-match.spec';
import './examples/TestRoutingGuard/test.spec';
import './examples/TestRoutingResolver/fn.spec';
import './examples/TestRoutingResolver/test.spec';
import './examples/TestStandaloneComponent/test.spec';
import './examples/TestStandaloneDirective/test.spec';
import './examples/TestStandalonePipe/test.spec';
import './examples/TestStructuralDirective/test.spec';
import './examples/TestStructuralDirectiveWithContext/test.spec';
import './examples/TestTemplateRefByDirective/test.spec';
import './examples/TestTemplateRefById/test.spec';
import './examples/TestTemplateRefByRender/test.spec';
import './examples/TestToken/test.spec';
import './examples/TestViewChild/test.spec';
import './examples/main/test.spec';
import './examples/ngMocksFaster/test.spec';
import './examples/ngMocksGuts/test.spec';
import './examples/readme/builder.spec';
import './examples/readme/classic.spec';

import './tests/NG_MOCKS_ROOT_PROVIDERS/test.spec';
import './tests/abstract-methods-provider/test.spec';
import './tests/auto-spy/test.spec';
import './tests/context-with-directives/test.spec';
import './tests/control-value-accessor-form-control/test.spec';
import './tests/control-value-accessor-ng-model/test.spec';
import './tests/correct-module-exports/test.spec';
import './tests/double-declarations/test.spec';
import './tests/double-decorator/example-1.spec';
import './tests/double-decorator/example-2.spec';
import './tests/double-decorator/example-3.spec';
import './tests/double-decorator/with-selector.spec';
import './tests/double-decorator/without-selector-ivy.spec';
import './tests/double-decorator/without-selector.spec';
import './tests/export-all/test.spec';
import './tests/exports-only/test.spec';
import './tests/fake-async/test.spec';
import './tests/flex-exact-mocks/test.spec';
import './tests/get-inputs-and-outputs/test.spec';
import './tests/get-mocked-ng-def-of/test.spec';
import './tests/injected-ng-templates/test.spec';
import './tests/interceptor-kept-mocked/test.spec';
import './tests/internal-only-nested/test.spec';
import './tests/internal-only/test.spec';
import './tests/internal-vs-external/test.spec';
import './tests/is-mock-of/test.spec';
import './tests/is-mocked-ng-def-of/test.spec';
import './tests/issue-1165/test.spec';
import './tests/issue-1168/test.spec';
import './tests/issue-1256/test.spec';
import './tests/issue-1377/test.spec';
import './tests/issue-142/test.spec';
import './tests/issue-1427/test.spec';
import './tests/issue-145/components.spec';
import './tests/issue-145/directives.spec';
import './tests/issue-1507/test.spec';
import './tests/issue-151/test.spec';
import './tests/issue-157/test.spec';
import './tests/issue-1587/test.spec';
import './tests/issue-1596/test.spec';
import './tests/issue-162/test.spec';
import './tests/issue-166/test.spec';
import './tests/issue-167/component.spec';
import './tests/issue-167/directive.spec';
import './tests/issue-167/ng-validators.spec';
import './tests/issue-170/test.spec';
import './tests/issue-172/test.spec';
import './tests/issue-173/test.spec';
import './tests/issue-175/test.spec';
import './tests/issue-177/test.spec';
import './tests/issue-178/test.spec';
import './tests/issue-181/test.spec';
import './tests/issue-186/test.spec';
import './tests/issue-1876/test.spec';
import './tests/issue-1957/test.spec';
import './tests/issue-197/abstract.spec';
import './tests/issue-197/with-providers.spec';
import './tests/issue-2087/test.spec';
import './tests/issue-2097/nested.spec';
import './tests/issue-2097/test.spec';
import './tests/issue-2105/test.spec';
import './tests/issue-218/test.spec';
import './tests/issue-222/app-initializer.spec';
import './tests/issue-222/application-module.spec';
import './tests/issue-222/common-module.spec';
import './tests/issue-222/dom-shared-styles-host.spec';
import './tests/issue-222/injector-scope.spec';
import './tests/issue-222/injector.spec';
import './tests/issue-222/kept-root-injection.spec';
import './tests/issue-222/mock-keep-priorities.spec';
import './tests/issue-2302/test.spec';
import './tests/issue-2311/test.spec';
import './tests/issue-2314/test.spec';
import './tests/issue-2398/test.spec';
import './tests/issue-240/test.builder.spec';
import './tests/issue-240/test.classic.spec';
import './tests/issue-240/test.guts.spec';
import './tests/issue-240/test.nodes.spec';
import './tests/issue-240/test.real.spec';
import './tests/issue-241/test.builder.spec';
import './tests/issue-241/test.classic.spec';
import './tests/issue-241/test.guts.spec';
import './tests/issue-241/test.real.spec';
import './tests/issue-246/test.spec';
import './tests/issue-248/test.spec';
import './tests/issue-2646/test.spec';
import './tests/issue-2647/errors.spec';
import './tests/issue-2647/ignore.spec';
import './tests/issue-2647/test.spec';
import './tests/issue-2647/warn.spec';
import './tests/issue-266/test.spec';
import './tests/issue-2687/legacy.spec';
import './tests/issue-2687/test.spec';
import './tests/issue-270/test.spec';
import './tests/issue-271/test.spec';
import './tests/issue-2845/test.spec';
import './tests/issue-288/ng-model.spec';
import './tests/issue-288/test.spec';
import './tests/issue-289/test.spec';
import './tests/issue-296/test.spec';
import './tests/issue-298/case.spec';
import './tests/issue-298/pipes.spec';
import './tests/issue-298/stack-blitz.spec';
import './tests/issue-298/test.spec';
import './tests/issue-302/test.spec';
import './tests/issue-305/forms.spec';
import './tests/issue-305/overrides.spec';
import './tests/issue-305/reactive-forms.spec';
import './tests/issue-3053/test.spec';
import './tests/issue-3095/test.spec';
import './tests/issue-3100/test.spec';
import './tests/issue-312/test.spec';
import './tests/issue-3161/exclude.spec';
import './tests/issue-3161/keep.spec';
import './tests/issue-3161/test.spec';
import './tests/issue-3265/test.spec';
import './tests/issue-3274/test.spec';
import './tests/issue-333/test.spec';
import './tests/issue-354/test.spec';
import './tests/issue-3635/test.spec';
import './tests/issue-3636/test.spec';
import './tests/issue-377/e2e.spec';
import './tests/issue-377/test.spec';
import './tests/issue-3791/test.spec';
import './tests/issue-3811/test.spec';
import './tests/issue-4032/test.spec';
import './tests/issue-4228/test.spec';
import './tests/issue-4282/global.spec';
import './tests/issue-4282/test.spec';
import './tests/issue-434/test.spec';
import './tests/issue-4344/standalone-explicit.spec';
import './tests/issue-4344/standalone.spec';
import './tests/issue-4344/test.spec';
import './tests/issue-4344/with-providers-explicit.spec';
import './tests/issue-4344/with-providers.spec';
import './tests/issue-435/test.spec';
import './tests/issue-4367/test.spec';
import './tests/issue-445/test.spec';
import './tests/issue-455/abstract.spec';
import './tests/issue-455/token.spec';
import './tests/issue-4564/test.spec';
import './tests/issue-4613/providers.spec';
import './tests/issue-4613/test.spec';
import './tests/issue-4641/mixed.spec';
import './tests/issue-4641/test.spec';
import './tests/issue-488/faster.spec';
import './tests/issue-488/test.spec';
import './tests/issue-5047/test.spec';
import './tests/issue-5117/base.spec';
import './tests/issue-5117/coverage.spec';
import './tests/issue-5117/input.spec';
import './tests/issue-5117/output.spec';
import './tests/issue-5117/test.spec';
import './tests/issue-522/test.spec';
import './tests/issue-5239/test.spec';
import './tests/issue-5262/test.spec';
import './tests/issue-5350/test.spec';
import './tests/issue-537/test.spec';
import './tests/issue-538/test.spec';
import './tests/issue-5417/test.spec';
import './tests/issue-5465/test.spec';
import './tests/issue-5520/test.spec';
import './tests/issue-5537/test.spec';
import './tests/issue-567/test.spec';
import './tests/issue-568/test.spec';
import './tests/issue-572/test.spec';
import './tests/issue-576/test.spec';
import './tests/issue-589/test.spec';
import './tests/issue-621/test.spec';
import './tests/issue-623/nested.spec';
import './tests/issue-623/test.spec';
import './tests/issue-625/test.spec';
import './tests/issue-6402/test.spec';
import './tests/issue-641/test.spec';
import './tests/issue-6928/test.spec';
import './tests/issue-7041/test.spec';
import './tests/issue-721/before-all.spec';
import './tests/issue-721/before-each.spec';
import './tests/issue-7216/test.spec';
import './tests/issue-726/test.spec';
import './tests/issue-735/date-pipe.spec';
import './tests/issue-735/provider-for-module.spec';
import './tests/issue-735/provider.spec';
import './tests/issue-735/test.spec';
import './tests/issue-735/token-for-root.spec';
import './tests/issue-735/token.spec';
import './tests/issue-736/test.spec';
import './tests/issue-760/jest.spec';
import './tests/issue-760/no-decorators.spec';
import './tests/issue-762/module.spec';
import './tests/issue-762/string.spec';
import './tests/issue-762/token.spec';
import './tests/issue-7796/test.spec';
import './tests/issue-857/string.spec';
import './tests/issue-885/test.spec';
import './tests/issue-8884/test.spec';
import './tests/issue-919/test.spec';
import './tests/issue-971/test.spec';
import './tests/mock-builder-by-directive/test.spec';
import './tests/mock-builder-keeps-application-module/test.spec';
import './tests/mock-builder-use-class/599.spec';
import './tests/mock-component-render/content-child.spec';
import './tests/mock-component-render/content-children-groups.spec';
import './tests/mock-component-render/content-children.spec';
import './tests/mock-component-render/hide.spec';
import './tests/mock-component-render/reduced.spec';
import './tests/mock-component/test.spec';
import './tests/mock-directive-with-multi-token/test.spec';
import './tests/mock-instance-in-it/test.spec';
import './tests/mock-instance-member/reset.spec';
import './tests/mock-instance-member/test.spec';
import './tests/mock-instance-scope/test.spec';
import './tests/mock-instance-token/test.spec';
import './tests/mock-of-mock/test.spec';
import './tests/mock-render-all-properties/test.spec';
import './tests/mock-render-attribute/test.spec';
import './tests/mock-render-factory/docs.spec';
import './tests/mock-render-factory/install.spec';
import './tests/mock-render-factory/test.spec';
import './tests/mock-render-factory/tpl.spec';
import './tests/mock-render-mirrors-component/test.spec';
import './tests/mock-render-param-ref/test.spec';
import './tests/mock-render-tokens/test.spec';
import './tests/mock-render-view-providers/test.spec';
import './tests/mock-service-override/test.spec';
import './tests/mock-service/observable.spec';
import './tests/mock-service/test.spec';
import './tests/module-with-factory-tokens/test.spec';
import './tests/module-with-tokens/test.spec';
import './tests/multi-tokens/test.spec';
import './tests/nested-before-each/test.spec';
import './tests/ng-mocks-change/317.spec';
import './tests/ng-mocks-change/3341.spec';
import './tests/ng-mocks-change/cdr-change.spec';
import './tests/ng-mocks-change/cdr-input.spec';
import './tests/ng-mocks-change/forms.spec';
import './tests/ng-mocks-change/reactive-forms.spec';
import './tests/ng-mocks-click/317.spec';
import './tests/ng-mocks-crawl/317.spec';
import './tests/ng-mocks-crawl/test.spec';
import './tests/ng-mocks-default-mock/test.builder.spec';
import './tests/ng-mocks-default-mock/test.guts.spec';
import './tests/ng-mocks-default-mock/test.precise.spec';
import './tests/ng-mocks-default-mock/test.real.spec';
import './tests/ng-mocks-default-mock/test.unset.spec';
import './tests/ng-mocks-faster/test.spec';
import './tests/ng-mocks-find-all/test.spec';
import './tests/ng-mocks-find-instance-token/test.spec';
import './tests/ng-mocks-find-instance/317.spec';
import './tests/ng-mocks-find-instance/abstract.spec';
import './tests/ng-mocks-find-instance/test.spec';
import './tests/ng-mocks-find-instances/317.spec';
import './tests/ng-mocks-find-instances/test.spec';
import './tests/ng-mocks-find-template-ref/317.spec';
import './tests/ng-mocks-find-template-ref/test.spec';
import './tests/ng-mocks-find-template-refs/317.spec';
import './tests/ng-mocks-find-template-refs/test.spec';
import './tests/ng-mocks-find/test.spec';
import './tests/ng-mocks-format-html/test.spec';
import './tests/ng-mocks-format-text/test.spec';
import './tests/ng-mocks-get/317.spec';
import './tests/ng-mocks-get/test.spec';
import './tests/ng-mocks-global-exclude-modules/test.spec';
import './tests/ng-mocks-global-exclude/test.override.spec';
import './tests/ng-mocks-global-exclude/test.spec';
import './tests/ng-mocks-global-keep-modules/test.spec';
import './tests/ng-mocks-global-keep/test.override.spec';
import './tests/ng-mocks-global-keep/test.spec';
import './tests/ng-mocks-global-mock/test.spec';
import './tests/ng-mocks-global-replace-modules/test.spec';
import './tests/ng-mocks-global-replace/test.component.spec';
import './tests/ng-mocks-global-replace/test.directive.spec';
import './tests/ng-mocks-global-replace/test.failures.spec';
import './tests/ng-mocks-global-replace/test.override.spec';
import './tests/ng-mocks-global-replace/test.pipe.spec';
import './tests/ng-mocks-global-wipe/test.spec';
import './tests/ng-mocks-ignore-on-console/test.spec';
import './tests/ng-mocks-input/317.spec';
import './tests/ng-mocks-output/317.spec';
import './tests/ng-mocks-render/cdr.spec';
import './tests/ng-mocks-render/component.spec';
import './tests/ng-mocks-render/debug-node.spec';
import './tests/ng-mocks-render/directive.spec';
import './tests/ng-mocks-render/idea.spec';
import './tests/ng-mocks-render/parameters.spec';
import './tests/ng-mocks-render/use-existing.spec';
import './tests/ng-mocks-reveal-all/317.spec';
import './tests/ng-mocks-reveal/317.spec';
import './tests/ng-mocks-reveal/test.spec';
import './tests/ng-mocks-search-with-no-fixture/test.fixture.spec';
import './tests/ng-mocks-search-with-no-fixture/test.no-fixture.spec';
import './tests/ng-mocks-stub-member/test.spec';
import './tests/ng-mocks-stub/test.spec';
import './tests/ng-mocks-throw-on-console/test.spec';
import './tests/ng-mocks-touch/317.spec';
import './tests/ng-mocks-touch/3341.spec';
import './tests/ng-mocks-touch/cdr-blur.spec';
import './tests/ng-mocks-touch/cdr-touch.spec';
import './tests/ng-mocks-touch/test.spec';
import './tests/ng-mocks-trigger/317.spec';
import './tests/ng-mocks-trigger/blur.spec';
import './tests/ng-mocks-trigger/click.spec';
import './tests/ng-mocks-trigger/focus.spec';
import './tests/ng-mocks-trigger/keyup.spec';
import './tests/ng-mocks-trigger/test.spec';
import './tests/ng-zone/test.spec';
import './tests/normal-usage-after-mock-builder/test.spec';
import './tests/on-push/on-push.spec';
import './tests/performance/test.spec';
import './tests/pipe-as-service/test.spec';
import './tests/pipe-auto-spy/test.spec';
import './tests/providedin-root/test.spec';
import './tests/provider-never-mock/test.spec';
import './tests/provider-with-custom-dependencies/test.spec';
import './tests/provider-with-dependency/test.spec';
import './tests/replace-service-wherever/test.spec';
import './tests/rerender-rendered-content-child/test.spec';
import './tests/root-provider-in-depths/test.spec';
import './tests/root-provider-with-root-dep/test.spec';
import './tests/root-provider-with-string-dep/test.spec';
import './tests/root-providers/test.spec';
import './tests/shared-mocked-module/test.spec';
import './tests/spies/test.spec';
import './tests/structural-directives/test.spec';
import './tests/tokens-class/test.spec';
import './tests/tokens-existing/test.spec';
import './tests/tokens-factory/test.spec';
import './tests/tokens-value/test.spec';
