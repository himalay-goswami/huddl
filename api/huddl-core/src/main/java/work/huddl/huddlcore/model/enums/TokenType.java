package work.huddl.huddlcore.model.enums;

public enum TokenType {

	// === CORE STRUCTURE ===
	ROOT_COMMAND, // Always 'hdl'
	ACTION_COMMAND, // log, todo, note, journal, etc.

	// === PRIMARY DATA ===
	STRING_LITERAL, // "I started the parser..."
	IDENTIFIER, // plain identifiers like goal names, titles

	// === FLAGS & OPTIONS ===
	FLAG_LONG, // --today, --goal, --scope
	FLAG_SHORT, // -t, -g, -s

	// === STRUCTURAL ===
	KEY, // e.g., goal=Parser, scope=city
	VALUE, // e.g., Parser, city
	EQUALS, // '=' token, separating KEY=VALUE

	// === REFERENCES & LINKING ===
	NODE_REF, // e.g., #123, refers to an existing node
	DATE, // e.g., 2024-07-25 or 'today'
	SCOPE, // e.g., city, district, national
	STATUS, // e.g., done, blocked, in-progress

	// === ADVANCED CONSTRUCTS ===
	PIPE, // for piping outputs later e.g., `hdl query | hdl export`
	REDIRECT, // > log.txt or >> append
	COMMENT, // anything after a '#' not part of logic

	// === TERMINATORS ===
	EOF, // end of command
	ERROR // unrecognized tokens

}
