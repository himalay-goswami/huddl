package work.huddl.huddlcore.parser;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import work.huddl.huddlcore.service.ICommand;
import work.huddl.huddlcore.service.impl.LogCommand;
import work.huddl.huddlcore.service.impl.RelativeDate;
import work.huddl.huddlcore.tokenizer.CommandTokenizer;
import work.huddl.huddlcore.model.Token;
import work.huddl.huddlcore.model.enums.TokenType;

@Service
public class CommandParser {

	private int current = 0; // current token
	private ICommand actionCommand;
	private List<Token> tokens;

	public CommandParser(final ICommand actionCommand) {
		this.actionCommand = actionCommand;
		this.tokens = new ArrayList<>();
	}

	// this method will return a new LogCommand object, which we will execute.
	// this method will also extract log message.
	public LogCommand parse(final String command) {
		tokens = CommandTokenizer.tokenize(command);

		final Token rootToken = consume(TokenType.ROOT_COMMAND);
		final Token actionToken = consume(TokenType.ACTION_COMMAND);

		switch (actionToken.getValue()) {
			case "log" -> parseLogAction();
		}
	}

	private ICommand parseLogAction() {

		final Token messageToken = consume(TokenType.STRING_LITERAL);
		// final Token scopeToken = consume(TokenType.FLAG_LONG);

		while (current < tokens.size()) {
			Token token = peek();

			if (token.getTokenType() == TokenType.FLAG_LONG
					&& token.getValue().equals("--scope")) {
				advance(); // consume the scope flag
				consume(TokenType.STRING_LITERAL);
				return new LogCommand(messageToken.getValue(), RelativeDate.TODAY);
			}
		}
		return null;
	}

	private Token consume(TokenType tokenType) {
		if (check(tokenType)) {
			return advance();
		}
		return null;
	}

	private Token peek() {
		return tokens.get(current);
	}

	// check if current token matches expected value
	private boolean check(TokenType type){
		return tokens.get(current).getTokenType() == type;
	}

	private Token advance() {
		if (current < tokens.size()) {
			return tokens.get(current++);
		}
		return null;
	}
}
