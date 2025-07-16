package work.huddl.userservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class UserStatus {

  @Id
  private Long userId; // User ID
  private String status;

  public UserStatus() {
    // Default constructor
  }

  public Long getUserId() {
    return userId;
  }

  public void setUserId(Long userId) {
    this.userId = userId;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }
}
