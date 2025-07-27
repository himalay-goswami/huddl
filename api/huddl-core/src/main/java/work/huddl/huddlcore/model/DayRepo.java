package work.huddl.huddlcore.model;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

/*
 * A Day Repo is a repository created for each day, which contains all the nodes created during the day.
 */
public abstract class DayRepo {

	private UUID id; // Unique day repo ID
	private UUID workspaceId; // Workspace this repo belongs to
	private LocalDate date; // One per day
	private Instant createdAt; // Timestamp when created
	private List<Node> nodes;
	private String workspaceName;

	public DayRepo(UUID id, UUID workspaceId, LocalDate date, Instant createdAt) {
		this.id = id;
		this.workspaceId = workspaceId;
		this.date = date;
		this.createdAt = createdAt;
	}

	// Getters and setters (if needed) should be added here
}
