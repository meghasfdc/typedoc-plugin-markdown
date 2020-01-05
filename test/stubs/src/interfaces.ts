interface Interface {
  /**
   * The colour
   */
  color?: string;
  /**
   * The width
   */
  width: number;
}

interface InterfaceWithTypeDeclarations {
  empCode: number;
  empName: string;
  getSalary: (number) => number;
}
