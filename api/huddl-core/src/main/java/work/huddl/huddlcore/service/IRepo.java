package work.huddl.huddlcore.service;

import work.huddl.huddlcore.model.Node;

public interface IRepo {

	/**
	 * Contains methods to perform operations on a repository.
	 */

	void addNode(Node node);

	void displayCompleteRepo();

	void displayNodesByType(String nodeType);

	void deleteNode(String securityContext, String nodeId);
}
