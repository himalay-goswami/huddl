package work.huddl.userservice.service.impl;

import work.huddl.userservice.mapper.UserEntityMapper;
import work.huddl.userservice.model.User;
import work.huddl.userservice.repository.UserRepository;
import work.huddl.userservice.service.UserService;
import work.huddl.userservice.shared.request.UserRequestDTO;
import work.huddl.userservice.shared.response.UserResponseDTO;

public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;
	private final UserEntityMapper mapper;

	public UserServiceImpl(UserRepository userRepository, UserEntityMapper mapper) {
		this.userRepository = userRepository;
        this.mapper = mapper;
    }

	@Override
	// This method registers a new user by saving the user entity to the database.
	public UserResponseDTO registerUser(UserRequestDTO userRequestDTO) {

		final User user  = mapper.toEntity(userRequestDTO);
		userRepository.save(user);
		return UserEntityMapper.toResponse(user);
	}

	@Override
	public Long getUserIdByEmail(String email) {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'getUserIdByEmail'");
	}

	@Override
	public UserResponseDTO updateUserDetails(Long userId, UserRequestDTO userRequestDTO) {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'updateUserDetails'");
	}

}
