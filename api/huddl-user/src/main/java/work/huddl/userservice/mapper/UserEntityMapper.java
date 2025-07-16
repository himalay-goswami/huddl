package work.huddl.userservice.mapper;

import org.springframework.stereotype.Component;
import work.huddl.userservice.model.User;
import work.huddl.userservice.shared.request.UserRequestDTO;
import work.huddl.userservice.shared.response.UserResponseDTO;
import work.huddl.userservice.util.IdGeneratorUtil;

@Component
public class UserEntityMapper {

	private UserEntityMapper() {
		// Private constructor to prevent instantiation
	}

	public User toEntity(UserRequestDTO userRequestDTO) {
		User user = new User();
		user.setId(IdGeneratorUtil.generateId());
		user.setEmail(userRequestDTO.getEmail());
		user.setName(userRequestDTO.getName());
		user.setPassword(userRequestDTO.getPassword());
        user.setWrittenLOC(0);
        user.setWrittenLOC(0);
		return user;
	}

	public static UserResponseDTO toResponse(User user) {
		UserResponseDTO response = new UserResponseDTO();
		response.setId(user.getId());
		response.setEmail(user.getEmail());
		response.setName(user.getName());
        response.setStreakDays(user.getStreak());

		return response;
	}
}
