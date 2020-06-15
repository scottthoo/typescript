import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n') // each row is a record
      .map((row: string): string[] => {
        return row.split(',');
      }); // now spliting each data in a record by ','
  }
}

//[ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ],
// MatchData is an array, from here is an array of MatchData, which is 2d array.
// You have list of matches 1,2,3,4...
// in each match have date,away,home,win, etc
// 2 dimension array !
