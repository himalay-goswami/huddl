package work.huddl.huddlcore.model.enums;

/**
 * Enum representing different types of nodes in the Huddl system.
 * Each type corresponds to a specific action or entity within the workspace.
 * Each node has associated metadata and its own set of actions.
 * Also, nodes can be linked to others, forming a network of interconnected
 * nodes.
 * Nodes can be editable, time bound, or have specific permissions.
 */
public enum NodeTypes {

	// Core Actions
	GOAL, TODO, NOTE, LOG, BLOCKER, INSIGHT,

	// Transition and State related Actions
	START, END, INTENT, CHECKIN, REVIEW,

	// organizational/meta Actions
	PROJECT, TOPIC, LINK, RESOURCE,

	// Interaction Actions
	NOTIFICATION, MENTION, INTEGRATION, COMMENT,

	// growth and personal development related Actions
	JOURNAL, HABIT, MOOD,

	// Future Actions 1 - sharing
	SNIPPET, VERSION, TEMPLATE,

	// Future Actions 2 - communication
	CIRCLE, DISCUSSION, BROADCAST, ANNOUNCEMENT,

}
