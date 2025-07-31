package work.huddl.userservice.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import work.huddl.userservice.mapper.UserEntityMapper;
import work.huddl.userservice.model.User;
import work.huddl.userservice.repository.UserRepository;
import work.huddl.userservice.service.UserService;
import work.huddl.userservice.shared.request.LoginRequestDTO;
import work.huddl.userservice.shared.request.UserRequestDTO;
import work.huddl.userservice.shared.response.AuthResponseDTO;
import work.huddl.userservice.shared.response.UserResponseDTO;
import work.huddl.userservice.util.JwtUtil;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;
	private final UserEntityMapper mapper;
	private final PasswordEncoder passwordEncoder;
	private final JwtUtil jwtUtil;

	@Autowired
	public UserServiceImpl(UserRepository userRepository, UserEntityMapper mapper, 
						   PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
		this.userRepository = userRepository;
		this.mapper = mapper;
		this.passwordEncoder = passwordEncoder;
		this.jwtUtil = jwtUtil;
	}

	@Override
	public UserResponseDTO registerUser(UserRequestDTO userRequestDTO) {
		// Check if user already exists
		if (userRepository.existsByEmail(userRequestDTO.getEmail())) {
			throw new RuntimeException("User with email " + userRequestDTO.getEmail() + " already exists");
		}

		// Create user entity with hashed password
		final User user = mapper.toEntity(userRequestDTO);
		user.setPassword(passwordEncoder.encode(userRequestDTO.getPassword()));
		
		// Save user to database
		User savedUser = userRepository.save(user);
		return UserEntityMapper.toResponse(savedUser);
	}

	@Override
	public AuthResponseDTO authenticateUser(LoginRequestDTO loginRequestDTO) {
		// Find user by email
		Optional<User> userOptional = userRepository.findByEmail(loginRequestDTO.getEmail());
		if (userOptional.isEmpty()) {
			throw new RuntimeException("Invalid email or password");
		}

		User user = userOptional.get();
		
		// Verify password
		if (!passwordEncoder.matches(loginRequestDTO.getPassword(), user.getPassword())) {
			throw new RuntimeException("Invalid email or password");
		}

		// Generate JWT token
		String token = jwtUtil.generateToken(user.getEmail());
		
		// Return authentication response
		UserResponseDTO userResponse = UserEntityMapper.toResponse(user);
		return new AuthResponseDTO(token, userResponse);
	}

	@Override
	public UserResponseDTO getUserByEmail(String email) {
		Optional<User> userOptional = userRepository.findByEmail(email);
		return userOptional.map(UserEntityMapper::toResponse).orElse(null);
	}

	@Override
	public UserResponseDTO updateUserDetails(String userId, UserRequestDTO userRequestDTO) {
		Optional<User> userOptional = userRepository.findById(userId);
		if (userOptional.isEmpty()) {
			throw new RuntimeException("User not found with ID: " + userId);
		}

		User user = userOptional.get();
		
		// Update user details (excluding password for security)
		user.setName(userRequestDTO.getName());
		// Email updates should be handled separately with verification
		
		User updatedUser = userRepository.save(user);
		return UserEntityMapper.toResponse(updatedUser);
	}
}
