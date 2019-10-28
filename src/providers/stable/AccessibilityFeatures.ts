import * as vscode from 'vscode';
import API from '../API';

import accessibilityFeatures from './accessibilityFeatures.json';

export default class AccessibilityFeatures extends API implements vscode.CompletionItemProvider {
    public provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
    ): vscode.ProviderResult<vscode.CompletionItem[]> {
        if (!this.isAvailable(document, position, 'accessibilityFeatures.')) {
            return [];
        }

        return accessibilityFeatures.map(feature => new vscode.CompletionItem(feature.name, feature.type));
    }
}