package work.huddl.huddlcore.model;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

import work.huddl.huddlcore.model.enums.NodeStatus;
import work.huddl.huddlcore.model.enums.NodeTypes;
import work.huddl.huddlcore.utils.idgen.NodeIdGen;

public abstract class Node {

	private String id; // Unique node ID
	private UUID workspaceId; // Links to user/workspace
	private UUID dayId; // The day timeline this node belongs to
	private UUID parentId; // Optional for threaded/logical grouping
	private NodeTypes nodeType; // Type of node (task, goal, log, etc)
	private String content; // Input string or full body
	private NodeStatus status; // For tasks, goals, etc
	private Instant startTime; // For logs, meetings, scheduled
	private Instant endTime; // Optional end
	private Instant createdAt; // System generated
	private Instant updatedAt; // On edit
	private List<String> tags; // Searchable quick lookup
	private String aiContext; // Optional: AI action results metadata

	/*
	 * This method needs to be looked at later
	 */
	private String generateNodeId() {
		return NodeIdGen.generateNodeId();
	}

	public Node(UUID dayId, UUID parentId, NodeTypes nodeType, String content) {
		this.id = generateNodeId();
		this.workspaceId = getWorkspaceId();
		this.dayId = dayId;
		this.parentId = parentId;
		this.nodeType = nodeType;
		this.content = content;
		this.status = NodeStatus.PENDING; // Default status
		this.createdAt = Instant.now();
		this.updatedAt = Instant.now();
	}

	private UUID getWorkspaceId() {

	}

}
