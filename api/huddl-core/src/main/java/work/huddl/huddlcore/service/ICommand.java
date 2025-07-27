package work.huddl.huddlcore.service;

import work.huddl.huddlcore.model.enums.NodeTypes;
import work.huddl.huddlcore.model.enums.TokenType;

public interface ICommand {

	TokenType getTokenType();

	void execute();

}
