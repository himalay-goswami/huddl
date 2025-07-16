package work.huddl.userservice.service;

import org.springframework.stereotype.Service;

@Service
public interface ProfilePictureService {

  String generateProfilePicture(String userId);
  String getProfilePicture(String userId);
}
