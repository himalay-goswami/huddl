package work.huddl.userservice.service;

import org.springframework.stereotype.Service;

import work.huddl.userservice.shared.request.UserRequestDTO;
import work.huddl.userservice.shared.response.UserResponseDTO;

@Service
public interface UserService {

	/**
	 * Registers a new user with the provided details.
	 *
	 * @param userRequestDTO the user details for registration
	 * @return a message indicating the result of the registration
	 */
	UserResponseDTO registerUser(UserRequestDTO userRequestDTO);

	/**
	 * Retrieves the user ID associated with the given email.
	 *
	 * @param email the email address of the user
	 * @return the user ID if found, otherwise null
	 */
	Long getUserIdByEmail(String email);

	/**
	 * Update the user details for the given user ID.
	 *
	 * @param userId the ID of the user
	 * @return the user details if found, otherwise null
	 */
	UserResponseDTO updateUserDetails(Long userId, UserRequestDTO userRequestDTO);
}
