package work.huddl.huddlcore.utils.idgen;

public class NodeIdGen {

	/*
	 * this is going to be a tough one.
	 *
	 */
	public static String generateNodeId() {
		// Generate a unique ID for the node
		// This could be a UUID, a timestamp, or any other unique identifier
		return java.util.UUID.randomUUID().toString();
	}

}
