package work.huddl.huddlcore.model.enums;

public enum ActionTypes {

	// === Core Actions ===
	CREATE,
	UPDATE,
	DELETE,
	LINK,
	UNLINK,
	ASSIGN,
	COMPLETE,
	ARCHIVE,
	RENAME,
	MOVE,
	SNOOZE,
	PIN,

	// === Timeline & Execution ===
	LOG,
	START,
	STOP,
	PAUSE,
	RESUME,
	EXECUTE,
	RECORD,
	TIMEBOX,

	// === Meta-Operations (System/Internal) ===
	TAG,
	VERSION,
	SNAPSHOT,
	MERGE,
	SPLIT,
	CLONE,
	MARK_DONE,
	REVERT,
	DEPRECATE,

	// === Collaboration / Routing ===
	SHARE,
	REQUEST,
	NOTIFY,
	ASSIGN_TO,
	COMMENT,
	MENTION,
	SUBSCRIBE,
	FOLLOW,
	WATCH,

	// === Workspace/DayRepo Level ===
	INIT,
	SYNC,
	CHECKPOINT,
	COMMIT,
	PUSH,
	PULL,
	FETCH,
	RESET,

	// === Custom (Extensible via Plugins) ===
	CUSTOM_AI_ACTION,
	CUSTOM_WORKFLOW_ACTION
}
