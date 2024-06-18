import { Injectable } from '@angular/core';
import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch/lite';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private readonly client: SearchClient = algoliasearch('appId', 'apiKey');
  private readonly index: SearchIndex = this.client.initIndex('indexName');

  search(text: string): Promise<any> {
    return this.index.search(text);
  }
}
