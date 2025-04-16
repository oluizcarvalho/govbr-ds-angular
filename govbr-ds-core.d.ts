/**
 * Declarações de tipo para os módulos do @govbr-ds/core
 */

declare module '@govbr-ds/core/dist/components/select/select' {
  export default class BRSelect {
    constructor(name: string, component: Element);
    selectedValue: string;
    resetOptionsList(): void;
  }
}
