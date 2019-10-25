import * as vscode from 'vscode';
import ChromeProvider from './ChromeProvider';

export function activate(context: vscode.ExtensionContext):void {
	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(
			{scheme: 'file', language: 'javascript'},
			new ChromeProvider()
		)
	);
}

export function deactivate() {}
