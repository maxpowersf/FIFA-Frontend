export const mapDatasourceToColumns = (datasource: any[]): string[] =>
  Object.keys(datasource[0]);
