package work.huddl.huddlcore.model;

import work.huddl.huddlcore.model.enums.TokenType;

public class Token {

	private TokenType tokenType;
	private String value;

	public Token(final TokenType tokenType, final String value) {
		this.tokenType = tokenType;
		this.value = value;
	}

	public TokenType getTokenType() {
		return tokenType;
	}

	public void setTokenType(TokenType tokenType) {
		this.tokenType = tokenType;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
}
