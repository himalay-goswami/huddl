package work.huddl.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import work.huddl.userservice.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {

	/**
	 * Retrieves the user ID associated with the given email.
	 *
	 * @param email the email address of the user
	 * @return the user ID if found, otherwise null
	 */
	Optional<User> getUserIdByEmail(String email);
}
