package work.huddl.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import work.huddl.userservice.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {

	/**
	 * Retrieves the user by email.
	 *
	 * @param email the email address of the user
	 * @return the user if found, otherwise empty optional
	 */
	Optional<User> findByEmail(String email);

	/**
	 * Checks if a user exists with the given email.
	 *
	 * @param email the email address to check
	 * @return true if user exists, false otherwise
	 */
	boolean existsByEmail(String email);
}
