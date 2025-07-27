package work.huddl.huddlcore.model;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

import work.huddl.huddlcore.model.enums.NodeStatus;
import work.huddl.huddlcore.model.enums.NodeTypes;

public abstract class Node {

	private UUID id; // Unique node ID
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
	 * We may need to implement a builder pattern here for more complex node
	 * creation.
	 */

	private Node() {
		// Default constructor for serialization/deserialization
	}

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public UUID getWorkspaceId() {
		return workspaceId;
	}

	public void setWorkspaceId(UUID workspaceId) {
		this.workspaceId = workspaceId;
	}

	public UUID getDayId() {
		return dayId;
	}

	public void setDayId(UUID dayId) {
		this.dayId = dayId;
	}

	public UUID getParentId() {
		return parentId;
	}

	public void setParentId(UUID parentId) {
		this.parentId = parentId;
	}

	public NodeTypes getNodeType() {
		return nodeType;
	}

	public void setNodeType(NodeTypes nodeType) {
		this.nodeType = nodeType;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public NodeStatus getStatus() {
		return status;
	}

	public void setStatus(NodeStatus status) {
		this.status = status;
	}

	public Instant getStartTime() {
		return startTime;
	}

	public void setStartTime(Instant startTime) {
		this.startTime = startTime;
	}

	public Instant getEndTime() {
		return endTime;
	}

	public void setEndTime(Instant endTime) {
		this.endTime = endTime;
	}

	public Instant getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Instant createdAt) {
		this.createdAt = createdAt;
	}

	public Instant getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Instant updatedAt) {
		this.updatedAt = updatedAt;
	}

	public List<String> getTags() {
		return tags;
	}

	public void setTags(List<String> tags) {
		this.tags = tags;
	}

	public String getAiContext() {
		return aiContext;
	}

	public void setAiContext(String aiContext) {
		this.aiContext = aiContext;
	}

}
