package work.huddl.huddlcore.model;

import java.time.Instant;
import java.util.UUID;

public class Workspace {

	private UUID id; // Unique workspace ID
	private UUID userId; // User who owns the workspace
	private String name; // Workspace name
	private String description; // Workspace description
	private Instant createdAt; // Timestamp when created
}
