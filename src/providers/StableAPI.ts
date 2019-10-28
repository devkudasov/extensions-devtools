import * as vscode from 'vscode';
import data from './stable.json';
import API from './API.js';

export default class StableApiProvider extends API implements vscode.CompletionItemProvider {
    public provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
    ): vscode.ProviderResult<vscode.CompletionItem[]> {
        if (!this.isAvailable(document, position, 'chrome.')) {
            return [];
        }

        return data.map(item => new vscode.CompletionItem(item.name, item.type));
    }
}