package work.huddl.huddlcore.service;

import org.springframework.stereotype.Service;
import work.huddl.huddlcore.model.enums.NodeTypes;
import work.huddl.huddlcore.model.enums.TokenType;

@Service
public interface ICommand {

	TokenType getTokenType();

	void execute();

}
