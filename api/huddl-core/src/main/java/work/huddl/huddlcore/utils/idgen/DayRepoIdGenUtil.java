package work.huddl.huddlcore.utils.idgen;

import java.time.LocalDate;
import java.util.UUID;

public class DayRepoIdGenUtil {

	/**
	 * Generates a unique ID for a DayRepo based on the workspace ID and date.
	 * 
	 * @param workspaceId The ID of the workspace.
	 * @param date        The date for which the DayRepo is being created.
	 * @return A unique UUID for the DayRepo.
	 */
	public static UUID generateDayRepoId(UUID workspaceId, LocalDate date) {
		if (workspaceId == null || date == null) {
			throw new IllegalArgumentException("Workspace ID and date must not be null");
		}

		// Combine workspace ID and date to create a unique identifier
		String uniqueString = workspaceId.toString() + date.toString();
		return UUID.nameUUIDFromBytes(uniqueString.getBytes());
	}
}
