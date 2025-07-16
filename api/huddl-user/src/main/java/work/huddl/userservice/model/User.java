package work.huddl.userservice.model;

import jakarta.persistence.*;

@Entity(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@Column(name = "name", nullable = false)
	private String name;

	@Column(name = "email", nullable = false, unique = true)
	private String email;

	@Column(name = "password", nullable = false)
	private String password;

	@Column(name = "profile_picture_url")
	private String profilePictureUrl;

	@Column(name = "bio")
	private String bio;

	@Column(name = "location")
	private String location;

	@Column(name = "date_of_birth")
	private String dateOfBirth;

	@Column(name = "organization")
	private String organization;

	@Column(name = "designation")
	private String designation;

	@Column(name = "written_loc")
	private Integer writtenLOC;

	@Column(name = "streak")
	private Integer streak;

	public User() {
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getOrganization() {
		return organization;
	}

	public void setOrganization(String organization) {
		this.organization = organization;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public Integer getWrittenLOC() {
		return writtenLOC;
	}

	public void setWrittenLOC(Integer writtenLOC) {
		this.writtenLOC = writtenLOC;
	}

	public Integer getStreak() {
		return streak;
	}

	public void setStreak(Integer streak) {
		this.streak = streak;
	}
}
