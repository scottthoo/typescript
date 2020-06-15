import {} from './utils';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Arsenal');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

console.log(matchReader);
