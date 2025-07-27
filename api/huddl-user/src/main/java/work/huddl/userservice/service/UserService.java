package work.huddl.userservice.service;

import org.springframework.stereotype.Service;

import work.huddl.userservice.shared.request.LoginRequestDTO;
import work.huddl.userservice.shared.request.UserRequestDTO;
import work.huddl.userservice.shared.response.AuthResponseDTO;
import work.huddl.userservice.shared.response.UserResponseDTO;

@Service
public interface UserService {

	/**
	 * Registers a new user with the provided details.
	 *
	 * @param userRequestDTO the user details for registration
	 * @return a UserResponseDTO containing the registered user information
	 */
	UserResponseDTO registerUser(UserRequestDTO userRequestDTO);

	/**
	 * Authenticates a user with email and password.
	 *
	 * @param loginRequestDTO the login credentials
	 * @return an AuthResponseDTO containing JWT token and user information
	 */
	AuthResponseDTO authenticateUser(LoginRequestDTO loginRequestDTO);

	/**
	 * Retrieves the user by email.
	 *
	 * @param email the email address of the user
	 * @return the UserResponseDTO if found, otherwise null
	 */
	UserResponseDTO getUserByEmail(String email);

	/**
	 * Update the user details for the given user ID.
	 *
	 * @param userId the ID of the user
	 * @param userRequestDTO the updated user details
	 * @return the updated user details if found, otherwise null
	 */
	UserResponseDTO updateUserDetails(String userId, UserRequestDTO userRequestDTO);
}
