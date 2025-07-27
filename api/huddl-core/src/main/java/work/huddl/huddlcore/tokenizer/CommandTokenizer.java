package work.huddl.huddlcore.tokenizer;

import java.util.ArrayList;
import java.util.List;

import work.huddl.huddlcore.model.Token;
import work.huddl.huddlcore.model.enums.TokenType;

public class CommandTokenizer {

	public static List<Token> tokenize(final String input) {

		// Split the input into tokens based on spaces, but keep quoted strings intact
		// This is a simple implementation;
		// A more robust tokenizer would handle quotes and escape characters
		// For now, we have a simple command: hdl log "I started the parser" --today
		// --today is a flag, "I started the parser" is a string literal, but i will
		// treat flag as optional for now.

		final String[] tokens = input.trim().split(" ", 4);

		if (tokens.length < 2) {
			throw new IllegalArgumentException(
					"Command must have at least an action and a string literal.");
		}

		// final String flags = tokens.length > 3 ? tokens[3] : "";
		final List<Token> result = new ArrayList<>();

		final String rootCommand = tokens[0];
		if (rootCommand != TokenType.ROOT_COMMAND.toString()) {
			throw new IllegalArgumentException("Root command must be HDL");
		} else {
			result.add(new Token(TokenType.ROOT_COMMAND, rootCommand));
		}

		final String actionCommand = tokens[1];
		if (actionCommand == TokenType.ACTION_COMMAND.toString()) {
			// TODO do something to initiate log action
			result.add(new Token(TokenType.ACTION_COMMAND, actionCommand));
		}

		final String logMessage = tokens[2];
		if (logMessage.isEmpty()) {
			throw new IllegalArgumentException("empty message cannot be logged.");
		} else {
			result.add(new Token(TokenType.STRING_LITERAL, logMessage));
		}

		final String flag = tokens[3];
		// final String flags = tokens[3];
		if (!flag.isEmpty()) {
			result.add(new Token(TokenType.FLAG_LONG, flag));
		}

		return result;
	}
}
