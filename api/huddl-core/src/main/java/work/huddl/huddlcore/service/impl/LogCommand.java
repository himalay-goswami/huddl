package work.huddl.huddlcore.service.impl;

import work.huddl.huddlcore.model.enums.TokenType;
import work.huddl.huddlcore.service.ICommand;

/*
 * LogCommand class is used to execute the log action. From parser, we detect which action is chosen, and we initiate that action. That being said, this class needs modifications. 
 */

public class LogCommand implements ICommand {

	private String message;
	private final RelativeDate scope;

	public LogCommand(final String message, final RelativeDate scope) {
		this.message = message;
		this.scope = scope;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public TokenType getTokenType() {
		return TokenType.ACTION_COMMAND;
	}

	@Override
	public String toString() {
		return "LogCommand{" +
				"tokenType=" + getTokenType() +
				'}';
	}

	@Override
	public void execute() {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'execute'");
	}
}
