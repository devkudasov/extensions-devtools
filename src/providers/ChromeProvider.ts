import * as vscode from 'vscode';

export default class ChromeProvider implements vscode.CompletionItemProvider {
    public provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[]> {
        return [
            new vscode.CompletionItem('chrome', 8)
        ];
    }
}