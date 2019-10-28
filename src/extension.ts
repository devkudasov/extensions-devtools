import * as vscode from 'vscode';

import ChromeProvider from './providers/ChromeProvider';
import StableApiProvider from './providers/StableAPI';
import AccessibilityFeatures from './providers/stable/AccessibilityFeatures';

const JS_MODE = {scheme: 'file', language: 'javascript'};

export function activate(context: vscode.ExtensionContext):void {
	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(
			JS_MODE,
			new ChromeProvider()
		)
	);

	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(
			JS_MODE,
			new StableApiProvider(),
			'.'
		)
	);

	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(
			JS_MODE,
			new AccessibilityFeatures(),
			'.'
		)
	);
}

export function deactivate() {}
