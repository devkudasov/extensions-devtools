import * as vscode from 'vscode';

export default class API {
    protected isAvailable(
        document: vscode.TextDocument,
        position: vscode.Position,
        word: string
    ): boolean {
        const currentLine: vscode.TextLine = document.lineAt(position);

        const currentWordRange: vscode.Range | undefined = document.getWordRangeAtPosition(position);
        const currentWordFirstCharacter: number = currentWordRange ? currentWordRange.start.character : currentLine.text.length;

        if (currentLine.text.substring(0, currentWordFirstCharacter).slice(-word.length) === word) {
            return true;
        }

        return false;
    }
}