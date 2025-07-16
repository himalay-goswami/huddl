package work.huddl.userservice.shared.response;

/**
 * UserResponseDTO is a Data Transfer Object (DTO) that represents the user
 * information
 * to be sent in API responses after a user is created.
 * It includes various user attributes such as name, email,
 * profile picture URL, bio, location, date of birth, organization, designation,
 * lines of code written,
 * and coding streak days.
 */
public class UserResponseDTO {

	private String id;
	private String name;
	private String email;
	private String profilePictureUrl; // randomly generated profile picture URL using some external API
	private String bio; // randomly generated bio using some external API
	private Integer writtenLOC; // Lines of Code written. set to 0 by default
	private Integer streakDays; // Coding streak. Set to 0 by default

	public UserResponseDTO() {
		// Default constructor
	}

	/**
	 * Constructor to initialize UserResponseDTO with all fields.
	 *
	 * @param id                the unique identifier of the user
	 * @param name              the name of the user
	 * @param email             the email address of the user
	 * @param profilePictureUrl the URL of the user's profile picture
	 * @param bio               a brief biography of the user
	 * @param writtenLOC        the number of lines of code written by the user
	 * @param streakDays        the number of consecutive coding days (streak)
	 */
	public UserResponseDTO(final String id, final String name, final String email, final String profilePictureUrl,
						   final String bio, final Integer writtenLOC, final Integer streakDays) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.profilePictureUrl = profilePictureUrl;
		this.bio = bio;
		this.writtenLOC = writtenLOC;
		this.streakDays = streakDays;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getProfilePictureUrl() {
		return profilePictureUrl;
	}

	public void setProfilePictureUrl(String profilePictureUrl) {
		this.profilePictureUrl = profilePictureUrl;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public Integer getWrittenLOC() {
		return writtenLOC;
	}

	public void setWrittenLOC(Integer writtenLOC) {
		this.writtenLOC = writtenLOC;
	}

	public Integer getStreakDays() {
		return streakDays;
	}

	public void setStreakDays(Integer streakDays) {
		this.streakDays = streakDays;
	}
}
