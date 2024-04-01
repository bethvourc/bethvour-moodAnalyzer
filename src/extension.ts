// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

function analyzeSentiment(text: string): number {
    // Placeholder function for sentiment analysis
    // Assume it returns a score based on the sentiment of the text
	// TODO: Need to parse and pass comments to this function.
    let score = 0;
    const words = text.split(/\s+/);
    words.forEach(word => {
        // This is where you'd integrate with your sentiment analysis library or API
        // Update the logic based on the API you're using
        score += Math.random() - 0.5; // Placeholder for sentiment scoring
    });
    return score;
}

function getCommentsFromText(text: string): string[] {
    // Simple regex to match single-line comments (e.g., // or #)
    // This is a basic example and might need to be adapted for different languages
    const commentRegex = /(?:\/\/|#).*/g;
    const comments = text.match(commentRegex);
    return comments || [];
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.analyzeMood', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const text = document.getText();
            // Extract comments from the text
            const comments = getCommentsFromText(text).join('\n');
            // Analyze the sentiment of the comments
            const score = analyzeSentiment(comments);
            vscode.window.showInformationMessage(`Mood Score: ${score.toFixed(2)}`);
        }
    });

    context.subscriptions.push(disposable);
}



// This method is called when your extension is deactivated
export function deactivate() {}
