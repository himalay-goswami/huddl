package work.huddl.huddlcore.model;

import java.time.Instant;
import java.util.UUID;

public class Workspace {

	private UUID id; // Unique workspace ID
	private UUID userId; // User who owns the workspace
	private String name; // Workspace name
	private String description; // Workspace description
	private Instant createdAt; // Timestamp when created

	public Workspace(UUID userId, String name, String description) {
		this.id = UUID.randomUUID(); // Generate a unique ID for the workspace
		this.userId = userId;
		this.name = name;
		this.description = description;
		this.createdAt = Instant.now(); // Set the creation timestamp
	}

}
